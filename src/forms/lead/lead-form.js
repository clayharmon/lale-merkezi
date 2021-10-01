import * as React from "react"
import { Form, Formik } from "formik"
import * as styles from "./lead-form.module.css"
import FieldWrapper from "../field-wrapper"
import LeadValidationSchema from "./lead-form-validation-schema"
import { useLocalization } from "gatsby-theme-i18n"
import { t } from "@lingui/macro"

const LeadForm = () => {
  const { locale } = useLocalization()
  const localValidation = LeadValidationSchema(locale)
  const [isSent, setIsSent] = React.useState(false)
  const [isUnknownerror, setIsUnknownError] = React.useState(false)

  return (
    <Formik
      initialValues={{
        fname: "",
        lname: "",
        phone: "",
        gdpr: false,
      }}
      validationSchema={localValidation}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
      }}
    >
      {({ values, isSubmitting }) => (
        <div>
          {isSent ? (
            <div className={styles.thankyouPage}>
              <h1>{t({ id: "form.thankyou", message: "Thank you!" })}</h1>
            </div>
          ) : (
            <Form className={styles.leadForm}>
              <p
                style={{
                  display: isUnknownerror ? "block" : "none",
                  color: "white",
                  marginBottom: "20px",
                  fontWeight: "bold",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                {t({
                  id: "form.unkownError",
                  message: "There was an unknown error. Please try again.",
                })}
              </p>
              <div className={styles.inputTwoCol}>
                <FieldWrapper
                  fieldName="fname"
                  label={t({ id: "form.fname", message: "First Name" })}
                  placeholder={t({
                    id: "form.fname",
                    message: "First Name",
                  })}
                  hideLabel={true}
                />
                <FieldWrapper
                  fieldName="lname"
                  label={t({ id: "form.lname", message: "Last Name" })}
                  placeholder={t({
                    id: "form.lname",
                    message: "Last Name",
                  })}
                  hideLabel={true}
                />
              </div>
              <FieldWrapper
                fieldName="phone"
                label={t({ id: "form.phone", message: "Phone" })}
                placeholder={t({ id: "form.phone", message: "Phone" })}
                hideLabel={true}
              />
              <FieldWrapper
                fieldName="gdpr"
                label={t({
                  id: "form.gdpr",
                  message:
                    "I consent to having this website store my submitted information so they can respond to my inquiry",
                })}
                type="checkbox"
              />

              <>
                {isSubmitting ? (
                  <button disabled type="submit">
                    <span className={styles.dotFlashing}></span>
                  </button>
                ) : (
                  <button disabled={isSubmitting} type="submit">
                    <span>{t({ id: "form.send", message: "Send" })}</span>
                  </button>
                )}
              </>
            </Form>
          )}
        </div>
      )}
    </Formik>
  )
}

export default LeadForm
