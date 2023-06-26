import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      src="https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/4:3/w_5332,h_3999,c_limit/tokyoGettyImages-1031467664.jpeg"
      address="Some Street 5, Some City"
      description="The meetup description"
      title="A First Meetup"
    />
  );
}

export async function getStaticPaths(){
  // prerendering pages
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  //every request

  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetipData: {
        id: meetupId,
        image:
          "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/4:3/w_5332,h_3999,c_limit/tokyoGettyImages-1031467664.jpeg",
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
