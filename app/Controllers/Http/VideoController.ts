import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

export default class VideosController {
  public async all(ctx: HttpContextContract) {
    const allVideos = await Database.from("videos").select("*");

    return allVideos;
  }
}
