import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { MapPool, Side } from "Contracts/enums";

export default class Video extends BaseModel {
  @column({ isPrimary: true })
  public youtube_id: string;

  @column()
  public title: string;

  @column()
  public map: MapPool;

  @column()
  public side: Side;

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
