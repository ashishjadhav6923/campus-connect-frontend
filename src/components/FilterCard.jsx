import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Filter } from "lucide-react";

const filterData = [
  {
    filterType: "Company Name",
    array: ["Amazon", "Google", "Capgemini", "TCS", "Meta"],
  },
  {
    filterType: "Job Role",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Data Analyst",
      "Software Tester",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Information Technology",
      "Finance",
      "Marketing",
      "Healthcare",
      "Other",
    ],
  },
];

function FilterCard() {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Filter Alumni Profiles</h1>
        <Filter className="h-5 w-5 hover:text-purple-700 " />
      </div>

      <hr className="mt-4" />
      <RadioGroup>
        {/* For every data object in the filterData array:
        Creates a <div> for that category.
        Displays the filterType as a heading (<h1>).
         */}
        {filterData.map((data, index) => (
          <div className="mt-5">
            <h1 className="text-purple-700 font-semibold">{data.filterType}</h1>
            {/* Iterates over the array property of the current data object.
            For each item in the array:
            Renders a radio button (<RadioGroupItem>) with its value set to the item.
            Creates a label (<Label>) displaying the item text. */}
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
