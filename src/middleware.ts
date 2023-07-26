import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = request.cookies;
  const pwd = cookieStore.get("pwd");

  if (!pwd) return NextResponse.redirect(new URL("/insert-code", request.url));
  if (pwd?.value !== "edps000") {
    cookieStore.delete("pwd");
    return NextResponse.redirect(new URL("/failed", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/pre-sale"],
};
