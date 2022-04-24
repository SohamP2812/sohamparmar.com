const { BetaAnalyticsDataClient } = require('@google-analytics/data')
const util = require('util')

export default async (req, res) => {
  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      type: 'service_account',
      project_id: 'personal-website-348015',
      private_key_id: '480eb9f036902f2deedd8713f2e89159c89b81df',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqnrZAIpwHHRs6\ndjmVNsNkVHCoqOjhum9kfLEuER1aDpdRMtks4bZ1z5vLVd+DfA5SpLDlPh/R1qRP\nHUZEl5qyg44jYINwpYo7L78az6TUfEuSL1HRJ4nNKeE7GfhasITX5cjIjaJn3LK1\n8JZuisZyBGu3DMjWH/jKqFM1gSFMk1Z6J9drGXTk131EDjU8i6Mxe7EPD8TClQnJ\nmNln6E5Mnwd5pgVNMJrdEvJOws3pB0C+7CwObQvE/Zovw3Z28ZDLnmVdLu91n4Zh\nKu8RN2GAF4hGwpMnD8bE5JzPWdF/j8uj0iwU24MfQtO1raOMm2VcqM4UaooL2ARC\neDHvJqKlAgMBAAECggEATOP6kRunwiLxVt7Zo2+LDadqH/ADB1sMATaaaH7JAgFK\nWwr1yV6s6hnWBYQdFvWsxLy4hY8CKwA2ivrP5HCIBEP6JeJESdsoWPTzBCOojiO3\nsNkHX6EYXm+ts4NII6KiM2O4IP2HP5Q7q3eRa565wL9SRauKxMiix72kxht8BLQz\nJ1ZlK1pe85toUpjofDrywxBI0o4xJjfysVrDu8wvhehHl7KNnkeNa4eT3Xq4V0KD\nQJpJvADP/J+M10GP06gvjvVPVjyNlbV1i7vKIplPEmdDyHsjy1sw4kjRIesPSE+5\niN9xBkP4Tws7EVdDGBpq1SGhDy2tScM86q1nczARDwKBgQDSxKJTeR0Iksk7RX3V\nxNRN9c+fwmE7XTQWSiE7UfWxYQ6aq09osO4nwQ43eVEsZCW3InhzfaKX8Z4d3b3C\n2uFgX4Lnl6jOMFykpPmeRGAJaJH7BM/uK2jjmieA+HdWBAJZQdqsI5aHdHhS/j9l\ncbhJmy4AJ9YTJxMqVwly6c9rPwKBgQDPPGJFnxUM1OKB7aI5PcbQUgw4hdmu8iFi\n65TadOVTpVfsfNeWGRREBmwvg+elHcu4c3qWWMiCzMbFlAdUl0qfF4YFTAlfAUDK\nZlAu0r+xRN1Q92WA+hVJlPct+YuxqF153dNxR26cFAXAMvdMgxrMvmcoN/Upu67n\nGqpHscPtGwKBgQCbwue3yqzTNi9zFzMctR61ErFC/tL+nS2uP1B512M8mF7DnVDN\nLNyEEp9gDc8YgFaDFf1wVGvB4LUam1Hu2/VtVIiYgLMm1gTRRH6ZISzcJySjHvZP\nrFMSyUziej0vGz1lG07wokhPiJqXsv/FB5rLAtynDsmdU+ZNBw+blgFM3wKBgDax\nKP5WzadlR6IipP2WYDH6dV81dA3HuSfyJIbC8wLwUBQJnpvuYnrRdxvTI/9frbQw\nRdoH9GMQyCS8vHKGuxrhim07c/2uxvqjpeW1mQGfuwjzQcaYOaYBunpXsZZhaMoQ\n0QzEXVyzrBDdYoa+0wPV/EORARLShYZYczgYoiyhAoGBAJFArICpwNI3CrlRHIjv\n87XRM3wKn1dcwpMfqQn0XdNpxFRMklGXG2KuvEBCVZK4cC+jje7SMyDMaHwdWGeS\nxVUt28SLWUAYJ2gUcZfqfFic8ian2bAUGCpEWWbRwpKVy8vfWVWpQRMn/l53qbZ8\ng3nvPk4/hlo3M4kXnoxv5+Us\n-----END PRIVATE KEY-----\n',
      client_email:
        'soham-parmar-personal-website@personal-website-348015.iam.gserviceaccount.com',
      client_id: '110777328565175948165',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/soham-parmar-personal-website%40personal-website-348015.iam.gserviceaccount.com',
    },
  })

  async function runReport() {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GOOGLE_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '2020-03-31',
          endDate: 'today',
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
      ],
    })
    return response.rows[0].metricValues[0].value
  }

  const data = await runReport()

  return res.status(200).json(data)
}
