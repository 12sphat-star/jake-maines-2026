export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json()

    if (
      !data.firstName ||
      !data.email ||
      !data.message
    ) {
      return Response.json(
        { error: 'Required fields are missing.' },
        { status: 400 }
      )
    }

    if (!env.GHL_WEBHOOK_URL) {
      return Response.json(
        { error: 'Lead capture is not configured.' },
        { status: 503 }
      )
    }

    const response = await fetch(env.GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName || '',
        email: data.email,
        phone: data.phone || '',
        interest: data.interest || 'General',
        message: data.message,
        source: 'Jake Maines Portfolio Demo',
      }),
    })

    if (!response.ok) {
      return Response.json(
        { error: 'Unable to submit inquiry.' },
        { status: 502 }
      )
    }

    return Response.json({ success: true })
  } catch {
    return Response.json(
      { error: 'Invalid submission.' },
      { status: 400 }
    )
  }
}