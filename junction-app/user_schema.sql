drop table if exists status;
create table status (
  status_id integer primary key autoincrement,
  ticket_id text not null,
  beacon_id text not null,
  last_checkpoint_id text not null,
  timestamp datetime not null
);
