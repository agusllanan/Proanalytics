function getRequestParams() {
  const API_KEY = process.env.MAILCHIP_API_KEY;
  const LIST_ID = process.env.LIST_ID;
  const DATACENTER = process.env.MAILCHIP_API_KEY.split("-")[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/list/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "suscribed",
  };
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };
  return {
    url,
    data,
    headers,
  };
}

export default async (req, res) => {
  const { email } = req.body;
  if (!email || !email.length) {
    return res.status(404).json({
      error: "¿Te olvidaste de dejar tu email?",
    });
  }
  try {
    const { url, data, headers } = getRequestParams(email);
    const response = await axios.post(url, data, { headers });

    // Exitoso!

    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oh, algo salio mal... Envianos un email a contacto@proanalytics.com y te agregare al newsletter`,
    });

    // Reportar los errores al Sentry
  }
};
