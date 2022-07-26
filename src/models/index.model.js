import Administrator from "../modules/admin/admin.model.js";
import Category from "../modules/category/category.model.js";
import Player from "../modules/player/player.model.js";
import User from "../modules/user/user.model.js";

export default function BootstrapModels() {
  User.hasOne(Player, {
    foreignKey: "user_id",
    as: "players",
  });
  Player.belongsTo(User, {
    foreignKey: "user_id",
    as: "users",
    constraints: true,
    onDelete: "CASCADE",
  });

  User.hasOne(Administrator, {
    foreignKey: "user_id",
    as: "administrators",
  });
  Administrator.belongsTo(User, {
    foreignKey: "user_id",
    as: "users",
    constraints: true,
    onDelete: "CASCADE",
  });

  Category.hasOne(Player, {
    foreignKey: "favorite",
    as: "players",
  });
  Player.belongsTo(Category, {
    foreignKey: "favorite",
    as: "Categories",
    constraints: true,
    onDelete: "CASCADE",
  });
}
