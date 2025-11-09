const favouriteFilm = {
  title: "Top Gun",
  year: "1986",
  genre: "action",
  star: "Tom Cruise",
  director: "Tony Scott",
};
const { title, star, genre, director, year } = favouriteFilm;

console.log(
  `My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`
);

// ------------------------------------------------------------------------------------

const dreamHoliday = {
  destination: "Japan",
  activity: "treak in the mountains",
  accommodation: "Traditional Japaneese Hotel",
  companion: "Family",
};

const { destination, activity, accommodation, companion } = dreamHoliday;

console.log(`I would love to go to ${destination} to ${activity}. 
     I'd sleep in a ${accommodation} and hang out with ${companion} all day.`);
