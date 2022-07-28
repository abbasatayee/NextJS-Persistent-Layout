import Link from 'next/link'
import SiteLayout from '../../components/SiteLayout'
import { getLayout } from '../../components/AccountSettingsLayout'

const AccountSettingsBasicInformation = () => (
  <div>
    <div className="pt-6 pb-8 sm:pt-8">
      <p className="text-sm text-gray-700">
        Set your login preferences, help us personalize your experience and make
        big account changes here.
      </p>
      <div className="mt-6">
        <div className="max-w-4xl mx-auto">
          <label className="block">
            <span className="block font-medium text-sm text-gray-900 leading-tight">
              Email address
            </span>
            <div className="mt-2">
              <input
                type="email"
                className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                placeholder="johndoe@example.com"
              />
            </div>
          </label>
          <label className="block mt-5">
            <span className="block font-medium text-sm text-gray-900 leading-tight">
              Country/region
            </span>
            <div className="mt-2">
              <input
                className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                placeholder="Canada"
              />
            </div>
          </label>
          <label className="block mt-5">
            <span className="block font-medium text-sm text-gray-900 leading-tight">
              Language
            </span>
            <div className="mt-2">
              <input
                className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                placeholder="English"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
    <div className="border-t-2 border-gray-200 px-0 py-5 flex justify-end">
      <button
        type="button"
        className="px-4 py-3 leading-none font-semibold rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
      >
        Cancel
      </button>
      <button
        type="button"
        className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
      >
        Save
      </button>
    </div>
  </div>
)

AccountSettingsBasicInformation.getLayout = getLayout

export default AccountSettingsBasicInformation
