import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { MapPool } from "Contracts/enums";

export default class Video extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public youtube_id: string;

  @column()
  public map: MapPool;

  @column()
  public player: string;

  @column()
  public team: string;

  @column()
  public enemy_team: string;

  @column()
  public upload_date: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
