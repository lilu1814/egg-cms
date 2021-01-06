'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('article_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: '用户id'
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '名称'
      },
      orderNum: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: '显示排序'
      },
      remark: {
        type: Sequelize.STRING,
        comment: '备注'
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '创建时间'
      },
      createdBy: {
        allowNull: true,
        type: Sequelize.STRING,
        comment: '创建者'
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '更新时间'
      },
      updatedBy: {
        allowNull: true,
        type: Sequelize.STRING,
        comment: '更新者'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('article_types');
  }
};