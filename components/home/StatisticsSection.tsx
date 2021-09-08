import content from '../../data/content'

const statistics = content.home.statistics

export default function StatisticsSection() {
    return (
      <div className="bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-black dark:text-gray-50 sm:text-4xl">{statistics.heading}</h2>
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-200 sm:mt-4">
              {statistics.body}
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
              {statistics.stats.map((item, index) => (
                <div key={index} className={index === 0 ? "flex flex-col" : "flex flex-col mt-10 sm:mt-0"}>
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-200">{item.context}</dt>
                <dd className="order-1 text-5xl font-semibold text-black dark:text-gray-50">{item.number}</dd>
                </div>
              ))}
          </dl>
        </div>
      </div>
    )
  }
  