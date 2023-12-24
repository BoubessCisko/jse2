import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export const config = {
    matcher: [ "/reprise/:id*(\\w{1,})","/cession" ],
       
    //   '/((?!api|cession|reprise|_next/static|_next/image|favicon.ico|$).*)',
    
  };
  export default withMiddlewareAuthRequired();