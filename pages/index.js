// our-domain/
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

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

function Homepage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default Homepage;
