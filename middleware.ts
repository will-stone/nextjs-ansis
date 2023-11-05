import { red } from "ansis";
import { NextResponse } from "next/server";

export async function middleware(): Promise<NextResponse> {
  const response = NextResponse.next();

  console.log('\x1b[36m%s\x1b[0m', 'Middleware log can use colour');  //cyan
  console.log(red("and Ansis works too! :)"));

  return response;
}
