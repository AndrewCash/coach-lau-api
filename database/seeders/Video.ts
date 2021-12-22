import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Video from "App/Models/Video";
import { MapPool } from "Contracts/enums";
import { DateTime } from "luxon";

export default class VideoSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Video.createMany([
      {
        title: "SMOOOOOOOOOOOOYA",
        youtube_id: "YxDox87_8Kk",
        map: MapPool.Ancient,
        player: "smooya",
        team: "Fnatic",
        enemy_team: "Gambit",
        upload_date: DateTime.fromISO("2021-12-13"),
      },
      {
        title: "b1tferno",
        youtube_id: "TQ9ufHeFIvA",
        map: MapPool.Inferno,
        player: "b1t",
        team: "NAVI",
        enemy_team: "Virtus.pro",
        upload_date: DateTime.fromISO("2021-05-02"),
      },
    ]);
  }
}
