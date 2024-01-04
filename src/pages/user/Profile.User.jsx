import { TextInput, Label, Button, Card, Rating, Blockquote } from "flowbite-react";
import React, { lazy } from "react";
const NavBar = lazy(() => import("../../components/NavBar"));
const Footer = lazy(() => import("../../components/Footer"));


const Profile = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* header */}
        <NavBar />
        {/* content start */}

        <div class="w-full p-8 flex space-y-8 md:space-x-8 md:space-y-0 flex-col md:flex-row max-w-7xl" >
          <div class="my-4 w-full max-w-md flex flex-col 2xl:flex-row 2xl:space-between space-y-4 2xl:space-y-0 2xl:space-x-4 align-left">
            <div class="w-full flex flex-col">
              <div class="flex-1  rounded-lg ">
                {/*avtor start*/}
                <div class="flex flex-col items-left -mt-10 ">
                  <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" class="w-40 border-4 border-white rounded-full" />
                  <div class="flex items-center space-x-2 mt-2">
                    <p class="text-3xl font-bold">Tharushi Vithanage</p>
                  </div>
                </div>
                {/*avtor end*/}
                <div class="mx-auto w-full max-w-[750px]">
                  <form action="" method="POST">
                    {/*Name  : start  */}
                    <div>
                      <div className="mb-3 block">
                        <Label htmlFor="Name" value="Name" />
                      </div>
                      <TextInput id="email1" className="inputs" type="email" placeholder="Tharushi Vithanage" required />
                    </div>
                    {/* Name : end */}
                    {/*email start */}
                    <div>
                      <div className="mb-3 block">
                        <Label htmlFor="email1" value="Email" />
                      </div>
                      <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
                    </div>
                    {/*email end */}
                    {/*birthday start */}
                    <div>
                      <div className="mb-3 block">
                        <Label htmlFor="birthday" value="Birthday" />
                      </div>
                      <TextInput id="birthday" type="date" placeholder="" required />
                    </div>
                    {/*birthday end */}
                    {/*button start */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Button color="blue">Save</Button>
                    </div>
                    {/*button end */}
                    {/*Current Password:start*/}
                    <div>
                      <div className="mb-3 block mt-3">
                        <Label htmlFor="Current Password" value="Current Password" />
                      </div>
                      <TextInput id="  Password" type=" Password" placeholder="********" required />
                    </div>
                    {/*Current Password:end*/}
                    {/*New Password:start*/}
                    <div>
                      <div className="mb-3 block">
                        <Label htmlFor="new Password" value="New Password" />
                      </div>
                      <TextInput id="  Password" type=" Password" placeholder="********" required />
                    </div>
                    {/*New Password:end*/}
                    {/*Conform Password:start*/}
                    <div>
                      <div className="mb-3 block">
                        <Label htmlFor="Conform Password" value="Conform Password" />
                      </div>
                      <TextInput id="  Password" type=" Password" placeholder="********" required />
                    </div>
                    {/*Conform Password:end*/}
                    <div>
                      <div className="flex flex-wrap gap-5 mt-3">
                        <Button color="blue">Change Password</Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
          <div class="my-4 w-full flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 align-right" style={{ width: '900px' }}>
            <h1 class="mb-10 text-left text-3xl font-bold">Favourite Books</h1>
            {/*1st card start*/}
            <Card className="max-w-sm" imgSrc="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80 " horizontal >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology .
              </p>
            </Card>
            {/*1st card end*/}
            {/*2nd card start*/}
            <Card className="max-w-sm" imgSrc="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 " horizontal >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology .
              </p>
            </Card>
            {/*2nd card end*/}
            {/*3rd card start*/}
            <Card className="max-w-sm" imgSrc="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80 " horizontal >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology .
              </p>
            </Card>
            {/*3rd card end*/}

            {/*Review start*/}
            <div className="p-4 sm:p-6 md:p-8"></div>
            <h1 class="mb-10 text-left text-3xl font-bold">Reviews</h1>
            {/*1st review -start*/}
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-1xl font-semibold text-gray-900 dark:text-white">
                  "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
                  complex dashboard. Perfect choice for your next SaaS application."
                </p>
              </Blockquote>
            </figure>
            {/*1st review -end*/}
            {/*2nt review -start*/}
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-1xl font-semibold text-gray-900 dark:text-white">
                  "I recently finished reading [Book Title], and I must say it was a captivating experience from start to finish. The author's storytelling is both engaging and thought-provoking, drawing me into a world of [themes, genres, or settings]. The characters were well-developed, and I found myself emotionally invested in their journeys."
                </p>
              </Blockquote>
            </figure>
            {/*2nd review -end*/}

          </div>
        </div>
        {/* content end */}
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Profile;
