/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 *
 * 这里才是我们学习 Node 的精华部分：奥义之所在
 * 封装异步 API
 */

// 引包
var fs = require('fs');
var dbPath = './db.json'

/**
 * callback中的参数
 *      第一个是err
 *          成功是null
 *          错误是错误对象
 *      第二个是 结果
 *          成功是 数组
 *          错误是 undefind
 * 
 * return []
 */


// 封装这个方法的目的：如果还有其他的页面需要students数据，直接调用students模块调用find方法
/**
 * 查询所有学生数据
 */
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {

        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

/**
 * 根据id获取学生对象信息
 * @param {number} id 
 * @param {function} callback  回调函数
 */
exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {

        if (err) {
            return callback(err)
        }

        var students = JSON.parse(data).students;

        var ret = students.find(function(item){
            return item.id == parseInt(id)
        })

        callback(null, ret)
    })
}

/**
 * 添加保存学生
 */

exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }

        var students = JSON.parse(data).students;

        // console.log(students)

        student.id = students[students.length - 1].id + 1

        students.push(student)

        var fileData = JSON.stringify({
            students: students
        });

        fs.writeFile(dbPath, fileData, function (err, data) {
            if (err) {
                return callback(err);
            }

            callback(null)

        })



    })

}


/**
 * 更新学生
 */

exports.update = function (student, callback) {

    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }

        var students = JSON.parse(data).students;

        // console.log(students)
        students[student.id - 1] = student;

        var fileData = JSON.stringify({
            students:students
        })


        fs.writeFile(dbPath, fileData, function (err, data) {
            if (err) {
                return callback(err);
            }

            callback(null)
        })
    })


}


/**
 * 删除学生
 */

exports.delete = function () {

}