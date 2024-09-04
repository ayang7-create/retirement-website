import React, { FC } from 'react';
import Table from 'react-bootstrap/Table';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div>
    <h1 className="text-3xl font-bold underline">
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
