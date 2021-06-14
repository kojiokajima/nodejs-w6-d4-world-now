export const getAllEvents = async () => {
  const resposne = await fetch(process.env.NEXT_PUBLIC_FIREBASE_DB)
  const data = await resposne.json()

  const events = []

  for (const key in data) {
    events.push({
      id: key,
      ...data[key]
    })
  }

  return events
}


export const getEventById = async (id) => {
  const allEvents = await getAllEvents()

  return allEvents.find(event => event.id === id)
}

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents()
  return allEvents.filter(event => event.isFeatured)
}

export const getFilteredEvents = async () => {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents()

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}