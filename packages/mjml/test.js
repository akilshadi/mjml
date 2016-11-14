var mjml = require('./lib/index')

const inputMJML = `<mjml>
  <mj-body>
    <mj-container background-color="#d6dde5">
      <mj-section padding-bottom="20" padding-top="20">
        <mj-column>
          <mj-carousel>
            <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
            <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
            <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
            <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
            <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
          </mj-carousel>
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>`

try {
  const { html, errors } = mjml.mjml2html(inputMJML, { beautify: true, level: "soft" })

  if (errors) {
    console.log(errors.map(e => e.formattedMessage).join('\n'))
  }

  console.log(html)
} catch(e) {
  if (e.getMessages) {
  console.log(e.getMessages())
  } else {
    throw e
  }
}
