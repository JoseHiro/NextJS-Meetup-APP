// our-domain/
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/4:3/w_5332,h_3999,c_limit/tokyoGettyImages-1031467664.jpeg",
    address: "Some address 5, 12345 Some City",
    decription: "This is a second meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/4:3/w_5332,h_3999,c_limit/tokyoGettyImages-1031467664.jpeg",
    address: "Some address 10, 12345 Some City",
    decription: "This is a second meetup",
  },
];

function Homepage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(process.env.MONGODB);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, // update
  }; // always return an object
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // every incoming request
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default Homepage;
