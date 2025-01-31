"use client";
import About from "@/landing/About";
import Subscription from "@/landing/Subscription";
import FindPath from "@/landing/FindPath";
import Security from "@/landing/Security";
import Question from "@/landing/Question";
import HeroSection from "@/landing/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Subscription />
      <FindPath />
      <Security />
      <Question />
    </>
  );
}
