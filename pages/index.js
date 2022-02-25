import Head from "next/head";
import { useState } from "react";
import { CSVLink } from "react-csv";

export default function Home() {
  const [domains, setDomains] = useState([]);
  const [input, setInput] = useState("");
  const [delimiter, setDelimiter] = useState(" ");
  const [loading, setLoading] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();

    let arr = input.split(delimiter);

    // Removes whitespace from array
    arr = arr.filter(function (str) {
      return /\S/.test(str);
    });

    setLoading(true);

    const postsResponse = await fetch("/api/search", {
      method: "post",
      body: JSON.stringify(arr),
    });
    const postsData = await postsResponse.json();
    setDomains(postsData);
    setLoading(false);
  }

  return (
    <div className="">
      <Head>
        <title>Domain Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container max-w-5xl space-y-10">
        {/* Header */}
        <h1 className="text-4xl text-center mt-40 text-gray-100">
          Domain Checker
        </h1>

        {/* Inputs */}
        <form onSubmit={handleOnSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Paste domains here
            </label>
            <input
              type="text"
              placeholder="Example: one.com two.com three.com"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              required
              id="large-input"
              className="block p-4 w-full text-white text-xl bg-gray-800 rounded-lg border border-gray-600 sm:text-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
        </form>

        {/* Delimiter */}

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-row gap-2 items-center justify-center">
            <svg
              role="status"
              className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <div className="text-base text-white text-center">Loading...</div>
          </div>
        ) : (
          ""
        )}

        {/* Table Start */}
        {domains.length > 0 ? (
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-700 table-fixed">
                    <thead className="bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-400 uppercase"
                        >
                          Domain
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-400 uppercase"
                        >
                          Disposable
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-400 uppercase"
                        >
                          Block
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      {domains.map((e) => (
                        <tr key={e.domain} className="hover:bg-gray-700">
                          <td className="py-4 px-6 text-base font-medium text-white whitespace-nowrap">
                            <a
                              target="blank"
                              href={`https://check-mail.org/domain/${e.domain}`}
                            >
                              {e.domain}
                            </a>
                          </td>
                          <td className="py-4 px-6 text-base font-medium text-white whitespace-nowrap">
                            {e.disposable ? (
                              <span className="bg-red-900 text-red-200 text-base font-medium py-2 px-4 rounded ">
                                TRUE
                              </span>
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="py-4 px-6 text-base font-medium text-white whitespace-nowrap">
                            {e.block ? (
                              <span className="bg-red-900 text-red-200 text-base font-medium py-2 px-4 rounded ">
                                TRUE
                              </span>
                            ) : (
                              ""
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* Table End */}

        {/* Download */}
        {domains.length > 0 ? (
          <div className="text-center">
            <CSVLink
              filename={"domain_results.csv"}
              data={domains.map((e) => e)}
            >
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-base font-medium text-gray-400 bg-gray-800 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                Download as CSV
              </button>
            </CSVLink>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
