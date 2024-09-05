import React, { FC } from 'react';
import Table from 'react-bootstrap/Table';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div>
    <div className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 w-full">
      <div className="absolute left-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#fc9803] to-[#fc03f4] opacity-50"
          style={{ clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" }}
        ></div>
      </div>
      <div className="absolute right-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#fc9803] to-[#fc03f4] opacity-50"
          style={{ clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" }}
        ></div>
      </div>
      <div className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 w-1/2 mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <p className="text-lg leading-6">
            Retirement Calculator
          </p>
        </div>
      </div>
    </div>
    <h1 className="p-6 max-w-sm -autmxo bg-white rounded-xl shadow-lg flex items-center space-x-4">
      Retirement Calculator
    </h1>
    <Table>
      <thead>
        Retirement Plan Parameters:
      </thead>
      <tbody>
        <tr>
          <td>
            Current Age: <input name="currentAge" />
          </td>
          <td>
            Retirement Age: <input name="retirementAge" />
          </td>
          <td>
            Starting Savings: <input name="startingSavings" />
          </td>
        </tr>
        <tr>
          Contribution Frequency:
          <td>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" />
              <label htmlFor="bordered-radio-1">
                Weekly
              </label>
            </div>
          </td>
          <td>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" />
              <label htmlFor="bordered-radio-2">
                Monthly
              </label>
            </div>
          </td>
          <td>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-radio-3" type="radio" value="" name="bordered-radio" />
              <label htmlFor="bordered-radio-3">
                Annual
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>

  </div>
);

export default Home;
