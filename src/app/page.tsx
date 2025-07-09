import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const Home = () => {
  return (
    <div>
      <Card className="flex w-fit">
        <CardHeader className="w-[10rem]">
          <div className="w-[10rem] flex rounded-full border-4 border-blue-600 h-[10rem] bg-[url(/profile.png)] bg-center bg-cover"></div>
          <CardTitle className="flex flex-col items-center gap-2 text-start mt-[0.9rem]">
            <span className="w-full">Arthur Jordy</span>
            <span className="w-full text-sm text-slate-400">
              Fullstack developer
            </span>
          </CardTitle>
          <Button className="bg-blue-600 cursor-pointer hover:bg-blue-700 transition duration-100">
            arthurfotso.bfkg@gmail.com
          </Button>
          <CardDescription className="mt-[1rem]">
            <span className="text-xs">20 ans - Cameroun, Bafoussam</span>
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default Home;
