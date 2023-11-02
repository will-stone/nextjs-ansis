import { NextResponse } from "next/server";
import ansis from "ansis";

export async function middleware(): Promise<NextResponse> {
  const response = NextResponse.next();

  console.log('\x1b[36m%s\x1b[0m', 'Middleware log can use colour');  //cyan
  console.log(ansis.red("but not when using Ansis"));

  return response;
}
