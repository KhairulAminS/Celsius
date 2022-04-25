package org.kas.api;

import org.jboss.resteasy.reactive.MultipartForm;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.DataInput;

@Path("api")
public class API {

    @POST
    @Path("/upload-file")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.TEXT_PLAIN)
    public Response uploadCSVFile(@MultipartForm DataInput csvFile){

        return Response.ok().build();
    }
}
