package org.kas;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


/*For testing only*/
@Path("/hello")
public class GreetingResource {

    String data = "Hello from Quarkus!";

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public Response hello() {
        return Response.ok(data).build();
    }

    @POST
    @Path("/post")
    @Produces(MediaType.TEXT_PLAIN)
    public Response post(){
        data = "Hi there!";
        return Response.ok("data diterima").build();
    }

    @DELETE
    @Path("/delete")
    @Produces(MediaType.TEXT_PLAIN)
    public Response delete(){
        data="";
        return Response.ok("data deleted").build();
    }
}