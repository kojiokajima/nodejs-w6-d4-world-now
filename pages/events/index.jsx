import React from 'react'
import {useRouter} from 'next/router'
import {getAllEvents} from 'helpers/api-utils'
import EventList from 'components/events/event-list'
import EventSearch from 'components/events/event-search'

const AllEventPage = ({events}) => {
  const router = useRouter()

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)

  }

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  )
}

export default AllEventPage

export async function getStaticProps(context){
  const events = await getAllEvents()

  return {
    props: {
      events: events
    }
  }
}