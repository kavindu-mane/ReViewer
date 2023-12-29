import React from 'react';
import backgroundImg from '../../img/background.jpg';
//import profileImg from '../../img/user-1';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

const Account = () => {
  return (
    <React.Fragment>

      <div class="h-full w-full bg-gray-200 p-8">
        <div class="bg-white rounded-lg shadow-xl pb-8">

          <div class="w-full h-[250px]">
            <img src={backgroundImg} class="w-full h-full rounded-tl-lg rounded-tr-lg" alt="Background"/>
          </div>
          <div class="flex flex-col items-center -mt-20">
            <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" class="w-40 border-4 border-white rounded-full" />
            <div class="flex items-center space-x-2 mt-2">
              <p class="text-2xl">Tharushi Vithanage</p>
              <span class="bg-blue-500 rounded-full p-1" title="Verified">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>

              </span>
            </div>

          </div>

        </div>

        <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div class="w-full flex flex-col 2xl:w-1/3">
            <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 class="text-xl text-gray-900 font-bold align-center" >Personal Information</h4>

              <div class="flex items-center justify-center p-12">


                <div class="mx-auto w-full max-w-[550px]">
                  <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div class="mb-5">
                      <label
                        for="name"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div class="mb-5">
                      <label
                        for="email"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>


                    <div>
                      <button
                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>


        </div>
        <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
          <h4 class="text-xl text-gray-900 font-bold">Change Password</h4>
          <div class="relative px-4">
            <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
            <div class="mx-auto w-full max-w-[550px]">
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-5">
                  <label
                    for="Current Password"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Current Password
                  </label>
                  <input
                    type="password-current"
                    name="password-current"
                    id="password-current"
                    placeholder="********"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="New Password"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    New Password
                  </label>
                  <input
                    type="password-new"
                    name="password-new"
                    id="password-new"
                    placeholder="********"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="Conform Password"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Conform Password
                  </label>
                  <input
                    type="password-conform"
                    name="password-conform"
                    id="password-new"
                    placeholder="********"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div>
                  <button
                    class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                  >
                    Change Password
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
