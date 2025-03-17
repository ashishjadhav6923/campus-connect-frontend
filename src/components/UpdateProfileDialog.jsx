import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function UpdateProfileDialog({ open, setOpen }) {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-center" htmlFor="fullname">
                  Name
                </Label>
                <Input
                  type="text"
                  id="fullname"
                  name="fullname" // Changed to 'fullname'
                  className="col-span-3"
                  placeholder="Enter Name"
                  //   value={input.fullname}
                  //   onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-center" htmlFor="email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="col-span-3"
                  //   value={input.email}
                  //   onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-center" htmlFor="phoneNumber">
                  Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  className="col-span-3"
                  placeholder="Enter Phone Number"
                  //   value={input.phoneNumber}
                  //   onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-center" htmlFor="password">
                  New Password
                </Label>
                <Input
                  id="bio"
                  //   value={input.bio}
                  name="bio"
                  className="col-span-3"
                  placeholder="Enter New Password"
                  //   onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-center" htmlFor="skills">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  type="text"
                  placeholder="Enter Skills"
                  //   value={input.skills}
                  className="col-span-3"
                  //   onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-center" htmlFor="file">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  className="col-span-3"

                  //   onChange={changeFileHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-center" htmlFor="file">
                  Profile Picture
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  className="col-span-3"

                  //   onChange={changeFileHandler}
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-2 ">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button type="submit" className="w-full my-2 ">
                  Save Changes
                </Button>
              )}
              <Button
                type="button"
                className="w-full my-2 bg-gray-200 text-gray-800 hover:bg-gray-300"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;
