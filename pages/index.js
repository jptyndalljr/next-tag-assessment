import Head from "next/head";
import Header from "@components/Header";
import Contact from "@components/Contact";

export default function Home({ users }) {
  return (
    <div>
      <Head>
        <title>TAG FE Assessment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Our Team" />
        <ul style={{ width: "90%" }}>
          {users.map((user, key) => (
            <li key={key}>
              <Contact user={user} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api/?results=5");
  const userResults = await res.json();
  const users = userResults.results;

  return {
    props: {
      users,
    },
  };
}
