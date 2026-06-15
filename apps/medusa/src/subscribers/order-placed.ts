type OrderPlacedEvent = {
  id: string;
};

export default async function orderPlacedSubscriber({ event }: { event: { data: OrderPlacedEvent } }) {
  const serviceUrl = process.env.WHATSAPP_SERVICE_URL;
  const internalKey = process.env.INTERNAL_API_KEY;

  if (!serviceUrl || !internalKey) {
    return;
  }

  await fetch(`${serviceUrl}/internal/whatsapp/order-placed`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-internal-api-key": internalKey
    },
    body: JSON.stringify({
      order_id: event.data.id
    })
  });
}

export const config = {
  event: "order.placed"
};
