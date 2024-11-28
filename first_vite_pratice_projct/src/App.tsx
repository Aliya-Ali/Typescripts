

interface Profile {
  name: string;
  price: number;
  product: number;
  subscriber: number;
  skill: string;
  hour: number;
}

// Function for showing the client
function Profile_show(profile: Profile): string {
  return `Hello, I am ${profile.name} and by profession I am ${profile.skill};`;
}

const profiles: Profile[] = [
  { name: "Ali", price: 29, product: 25, subscriber: 10, skill: "Data Analyst", hour: 24 },
  { name: "John", price: 50, product: 40, subscriber: 15, skill: "Data Scientist", hour: 24 },
  { name: "Muhammad", price: 60, product: 45, subscriber: 20, skill: "Machine Learning Engineer", hour: 24 },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((each_person) => (
          <div
            key={each_person.name}
            className="rounded-lg shadow-lg bg-white p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-600">{each_person.name}</h3>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-3xl font-bold text-gray-900">${each_person.price}</span>
              <span className="text-sm text-gray-500">/month</span>
            </p>
            <p className="mt-4 text-gray-600">{Profile_show(each_person)}</p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-indigo-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                {each_person.product} products
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-indigo-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                Up to {each_person.subscriber}K subscribers
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-indigo-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                {each_person.skill}
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-indigo-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                {each_person.hour}-hour support response time
              </li>
            </ul>
            <button
              className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 transition-colors duration-300"
            >
              Get started today
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

