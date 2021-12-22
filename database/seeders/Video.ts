import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Video from "App/Models/Video";
import { MapPool, Side } from "Contracts/enums";
import { DateTime } from "luxon";

export default class VideoSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Video.createMany([
      {
        youtube_id: "YxDox87_8Kk",
        title: "SMOOOOOOOOOOOOYA",
        map: MapPool.Ancient,
        side: Side.CT,
        player: "smooya",
        team: "Fnatic",
        enemy_team: "Gambit",
        upload_date: DateTime.fromISO("2021-12-13"),
      },
      {
        youtube_id: "TQ9ufHeFIvA",
        title: "b1tferno",
        map: MapPool.Inferno,
        side: Side.CT,
        player: "b1t",
        team: "NAVI",
        enemy_team: "Virtus.pro",
        upload_date: DateTime.fromISO("2021-05-02"),
      },
    ]);
  }
}
