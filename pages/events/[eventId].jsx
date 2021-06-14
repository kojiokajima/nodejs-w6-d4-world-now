import { useRouter } from 'next/router'

// import { getEventById } from 'dummy-data'
import { getEventById } from 'helpers/api-utils'
import EventHeader from 'components/event-detail/event-header'
import EventLogistics from 'components/event-detail/event-logistics'
import EventContent from 'components/event-detail/event-content'
import ErrorAlert from 'components/ui/error-alert'
import { getFeaturedEvents } from 'dummy-data'

const EventDetailPage = (props) => {
    // const router = useRouter()

    // const eventId = router.query.eventId
    const event = props.selectedEvent

    if(!event){
        return(
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        )
    }

    return(
        <>
            <EventHeader title={event.title} />
            <EventLogistics
                date={event.date}
                location={event.location}
                image={event.image}
                imageAlt={event.title}
            >

            </EventLogistics>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export default EventDetailPage

export async function getStaticProps(context){
    const eventId = context.params.eventId

    const event = await getEventById(eventId)

    return {
        props: {
            selectedEvent: event
        }
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents()

    const paths = events.map(event => ({ params: { eventId: event.id }}))

    return {
        paths: paths,
        fallback: 'blocking'
    }
}