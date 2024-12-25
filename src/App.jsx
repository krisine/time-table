import React, { useState } from 'react';

const App = () => {
  const [selectedWeek, setSelectedWeek] = useState('all');

  const courseData = {
    1: {
      // 第一节
      monday: [
        {
          name: '临床解剖学(511005.03) (李治华)',
          time: '(14-16,北1_102)',
          weeks: [14, 15, 16],
        },
        {
          name: '临床解剖学(511005.03) (邵金平)',
          time: '(11-13,北1_102)',
          weeks: [11, 12, 13],
        },
        {
          name: '临床解剖学(511005.03) (曹靖)',
          time: '(9-10,北1_102)',
          weeks: [9, 10],
        },
      ],
      tuesday: [
        {
          name: '生物化学与分子生物学(511026.03) (袁野)',
          time: '(7-12,北1_201)',
          weeks: [7, 8, 9, 10, 11, 12],
        },
        {
          name: '生物化学与分子生物学(511026.03) (臧明玺)',
          time: '(13-17,北1_201)',
          weeks: [13, 14, 15, 16, 17],
        },
        {
          name: '生物化学与分子生物学(511026.03) (金戈)',
          time: '(1-3 5-6,北1_201)',
          weeks: [1, 2, 3, 5, 6],
        },
        {
          name: '大学物理实验B(225058.03)',
          time: '(双6-16 组2)',
          weeks: [6, 8, 10, 12, 14, 16],
        },
      ],
      wednesday: [
        {
          name: '大学生职业生涯规划与就业指导(416001.s3) (杨欣巍)',
          time: '(5,北4_301)',
          weeks: [5],
        },
      ],
      thursday: [
        {
          name: '生理学(511010.03) (李博)',
          time: '(14-17,北1_108)',
          weeks: [14, 15, 16, 17],
        },
        {
          name: '生理学(511010.03) (张荻)',
          time: '(9-13,北1_108)',
          weeks: [9, 10, 11, 12, 13],
        },
        {
          name: '生理学(511010.03) (赵文超)',
          time: '(6-8,北1_108)',
          weeks: [6, 7, 8],
        },
        {
          name: '生理学(511010.03) (段东晓)',
          time: '(1-3 5,北1_108)',
          weeks: [1, 2, 3, 5],
        },
      ],
      friday: [
        {
          name: '生物化学与分子生物学(511026.03) (胡涛)',
          time: '(3 双6-8 10-11)',
          weeks: [3, 6, 8, 10, 11],
        },
        {
          name: '生物化学与分子生物学(511026.03) (睢晓洁)',
          time: '(5 9 12-13)',
          weeks: [5, 9, 12, 13],
        },
        {
          name: '生物化学与分子生物学(511026.03) (臧明玺)',
          time: '(7)',
          weeks: [7],
        },
      ],
      sunday: [
        {
          name: '临床解剖学(511005.03) (马钊,王志新)',
          time: '(盆部、会阴)(9-14)',
          weeks: [9, 10, 11, 12, 13, 14],
        },
      ],
    },
    3: {
      // 第三节
      monday: [
        {
          name: '体育（III）(491003.72) (尚洪涛)',
          time: '(1-16,南体育馆)',
          weeks: Array.from({ length: 16 }, (_, i) => i + 1),
        },
      ],
      tuesday: [
        {
          name: '马克思主义基本原理(392052.18) (臧豪杰)',
          time: '(单1-3 5-17,北2_206)',
          weeks: [1, 3, 5, 7, 9, 11, 13, 15, 17],
        },
        {
          name: '大学物理实验B(225058.03)',
          time: '(双6-16 组2)',
          weeks: [6, 8, 10, 12, 14, 16],
        },
      ],
      wednesday: [
        {
          name: '大学英语 （III）(371060.54) (宋璐)',
          time: '(1-3 5-16,北3_109)',
          weeks: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        },
      ],
      thursday: [
        {
          name: '生物化学与分子生物学(511026.03) (袁野)',
          time: '(7-11,北1_201)',
          weeks: [7, 8, 9, 10, 11],
        },
        {
          name: '生物化学与分子生物学(511026.03) (金戈)',
          time: '(1-3 5-6,北1_201)',
          weeks: [1, 2, 3, 5, 6],
        },
        {
          name: '生物化学与分子生物学(511026.03) (臧明玺)',
          time: '(12-14 16-17,北1_201)',
          weeks: [12, 13, 14, 16, 17],
        },
      ],
    },
    5: {
      // 第五节
      monday: [
        {
          name: '大学英语 （III）(371060.54) (宋璐)',
          time: '(11,北2_105)',
          weeks: [11],
        },
      ],
      tuesday: [
        {
          name: '生物化学与分子生物学(511026.03) (臧明玺)',
          time: '(16,北1_201)',
          weeks: [16],
        },
      ],
      wednesday: [
        {
          name: '形势与政策(391015.`2) (王维伟)',
          time: '(11-14,北2_304)',
          weeks: [11, 12, 13, 14],
        },
        {
          name: '普通化学实验(235036.20) (杨光)',
          time: '(3-10,普通化学实验室 组4)',
          weeks: [3, 4, 5, 6, 7, 8, 9, 10],
        },
      ],
      thursday: [
        {
          name: '机能学实验 ①(515006.03) (盛之玲)',
          time: '(9 11-15)',
          weeks: [9, 11, 12, 13, 14, 15],
        },
        {
          name: '机能学实验 ①(515006.03) (陈佳楠)',
          time: '(2-3 5-7 10)',
          weeks: [2, 3, 5, 6, 7, 10],
        },
      ],
      friday: [
        {
          name: '大学物理B(222302.16) (王卫东)',
          time: '(3-14 16-17,北3_209)',
          weeks: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17],
        },
        {
          name: '大学物理B(222302.16) (王卫东)',
          time: '(15,停课)',
          weeks: [],
        },
      ],
      saturday: [
        {
          name: '大学物理B(222302.16) (王卫东)',
          time: '(16,北3_209)',
          weeks: [16],
        },
        {
          name: '大学物理B(222302.16) (王卫东)',
          time: '(14-15,停课)',
          weeks: [],
        },
      ],
    },
    7: {
      // 第七节
      monday: [
        {
          name: '生理学(511010.03) (李博)',
          time: '(14-17,北1_108)',
          weeks: [14, 15, 16, 17],
        },
        {
          name: '生理学(511010.03) (张荻)',
          time: '(10-13,北1_108)',
          weeks: [10, 11, 12, 13],
        },
        {
          name: '生理学(511010.03) (赵文超)',
          time: '(6-9,北1_108)',
          weeks: [6, 7, 8, 9],
        },
        {
          name: '生理学(511010.03) (段东晓)',
          time: '(1-3 5,北1_108)',
          weeks: [1, 2, 3, 5],
        },
      ],
      tuesday: [
        {
          name: '大学物理B(222302.16) (王卫东)',
          time: '(3 5-17,北3_209)',
          weeks: [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        },
      ],
      wednesday: [
        {
          name: '大学生职业生涯规划与就业指导(416001.s3) (杨欣巍)',
          time: '(1-3 5-8,北4_301)',
          weeks: [1, 2, 3, 5, 6, 7, 8],
        },
        {
          name: '普通化学实验(235036.20) (杨光)',
          time: '(3-10,普通化学实验室 组4)',
          weeks: [3, 4, 5, 6, 7, 8, 9, 10],
        },
      ],
    },
    9: {
      // 第九节
      monday: [
        {
          name: '生物化学与分子生物学(511026.03) (臧明玺)',
          time: '(5-8 11)',
          weeks: [5, 6, 7, 8, 11],
        },
        {
          name: '生物化学与分子生物学(511026.03) (睢晓洁)',
          time: '(3 9)',
          weeks: [3, 9],
        },
        {
          name: '生物化学与分子生物学(511026.03) (胡涛)',
          time: '(10)',
          weeks: [10],
        },
      ],
    },
  };

  const renderCourses = (period, day) => {
    const courses = courseData[period]?.[day] || [];

    const hasConflict = (coursesToCheck, weekNum) => {
      console.log(coursesToCheck);
      if (weekNum === 'all') {
        for (const i of coursesToCheck) {
          if (i.name.includes('225058.03')) {
            return true;
          }
        }
        return false;
      }
      weekNum = parseInt(weekNum);
      const coursesInWeek = coursesToCheck.filter((course) =>
        course.weeks.includes(weekNum)
      );
      return coursesInWeek.length > 1;
    };

    const conflict = hasConflict(courses, selectedWeek);
    const cellStyle = conflict ? 'p-2 bg-red-100' : 'p-2';

    if (selectedWeek === 'all') {
      return courses.length > 0 ? (
        <div className={cellStyle}>
          {courses.map((course, idx) => (
            <div key={idx} className="mb-2">
              <div className="font-medium">{course.name}</div>
              <div className="text-sm text-gray-600">{course.time}</div>
            </div>
          ))}
        </div>
      ) : null;
    }

    const weekNum = parseInt(selectedWeek);
    const filteredCourses = courses.filter((course) =>
      course.weeks.includes(weekNum)
    );

    return filteredCourses.length > 0 ? (
      <div className={cellStyle}>
        {filteredCourses.map((course, idx) => (
          <div key={idx} className="mb-2">
            <div className="font-medium">{course.name}</div>
            <div className="text-sm text-gray-600">{course.time}</div>
          </div>
        ))}
      </div>
    ) : null;
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-4">
        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
          className="border rounded p-2"
        >
          <option value="all">全部周次</option>
          {Array.from({ length: 17 }, (_, i) => (
            <option key={i + 1} value={String(i + 1)}>
              第{i + 1}周
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border text-sm">
          <thead>
            <tr>
              <th className="border p-2 bg-blue-50">节次/周次</th>
              <th className="border p-2 bg-blue-50">星期一</th>
              <th className="border p-2 bg-blue-50">星期二</th>
              <th className="border p-2 bg-blue-50">星期三</th>
              <th className="border p-2 bg-blue-50">星期四</th>
              <th className="border p-2 bg-blue-50">星期五</th>
              <th className="border p-2 bg-blue-50">星期六</th>
              <th className="border p-2 bg-blue-50">星期日</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((period) => (
              <tr key={period}>
                <td className="border p-2 bg-yellow-100">第{period}节</td>
                <td className="border">{renderCourses(period, 'monday')}</td>
                <td className="border">{renderCourses(period, 'tuesday')}</td>
                <td className="border">{renderCourses(period, 'wednesday')}</td>
                <td className="border">{renderCourses(period, 'thursday')}</td>
                <td className="border">{renderCourses(period, 'friday')}</td>
                <td className="border">{renderCourses(period, 'saturday')}</td>
                <td className="border">{renderCourses(period, 'sunday')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
