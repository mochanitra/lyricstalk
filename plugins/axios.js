export default function ({
  app,
  $axios,
  redirect
}) {
  $axios.onRequest(config => {
    app.context.isDev && console.info(`Requesting: ${config.url}`)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    // if (code === 400 || code === 404) {
    //   redirect('/400')
    // }
  })
}
