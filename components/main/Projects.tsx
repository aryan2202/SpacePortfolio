import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/lifeline.png"
          title="Realtime Messaging Web Application"
          description="A chatting web application enables users to sign up, log in, and upload profile pictures. They can have one on one conversations or group chats, receive notifications for new messages, and view other’s online/offline status."
        />
        <ProjectCard
          src="/sorting.png"
          title="Sorting Visualizer Web Application"
          description="A Web App for visualizing a bunch of different sorting algorithms like Bubble Sort, Insertion Sort, Merge Sort, Quick Sort and Heap Sort with the functionality of (Speed Control) and (Array Size Control).
"
        />
        <ProjectCard
          src="/smartbrain.png"
          title="Face Detection Web Application"
          description="Implemented user authentication (sign-up and log-in) and developed functionality to upload image URL for face detection by using Clarifai API."
        />
      </div>
    </div>
  );
};

export default Projects;
