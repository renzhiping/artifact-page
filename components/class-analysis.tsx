"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Users, BookOpen, User, Brain, TrendingDown, CheckCircle,
  AlertTriangle, BarChart3, Send, Eye, PieChart,
  Target, Award, Clock, Zap, FileText, UserCheck
} from 'lucide-react';
import Navigation from './navigation';

const ClassAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Navigation />

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Users className="w-8 h-8 text-teal-600" />
            <h1 className="text-3xl font-bold text-gray-800">班级学习情况分析</h1>
          </div>
          <p className="text-lg text-gray-600">AI智能分析班级整体学习状况，识别普遍难点</p>
        </div>

        {/* Teacher Question */}
        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <User className="w-5 h-5" />
              教师问题
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 italic leading-relaxed">
                我是 1 班的老师，请帮我分析一下班级在《强化学习：基于环境交互的智能决策系统》这一章的整体学习情况，大家的普遍难点是什么？
              </p>
            </div>
          </CardContent>
        </Card>

        {/* AI Analysis Response */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-teal-700">
              <Brain className="w-5 h-5" />
              AI 助手分析
            </CardTitle>
            <CardDescription>正在分析【AI 导论 1 班】学习数据...</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              你好，老师。已拉取【AI 导论 1 班】（模拟共 48 人）在《强化学习》章节的学习数据：
            </p>
          </CardContent>
        </Card>

        {/* 1. Overall Progress */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingDown className="w-6 h-6 text-green-700" />
                1. 整体进度与参与度
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                    <CardContent className="p-6">
                        <BookOpen className="w-10 h-10 text-green-600 mx-auto mb-3" />
                        <div className="text-4xl font-bold text-green-800 mb-2">75%</div>
                        <p className="text-green-700 font-medium">教材阅读完成率 (平均)</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardContent className="p-6">
                        <FileText className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                        <div className="text-4xl font-bold text-blue-800 mb-2">89%</div>
                        <p className="text-blue-700 font-medium">贪吃蛇案例测验提交率</p>
                        <p className="text-xs text-blue-600 mt-1">(43 / 48 人)</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardContent className="p-6">
                        <Award className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                        <div className="text-4xl font-bold text-orange-800 mb-2">68.5</div>
                        <p className="text-orange-700 font-medium">章节测验平均分</p>
                        <p className="text-xs text-orange-600 mt-1">低于课程平均分 75 分</p>
                    </CardContent>
                </Card>
            </div>
        </div>

        {/* 2. Knowledge Points Mastery */}
        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-700 text-xl">
              <Target className="w-6 h-6" />
              2. 知识点掌握情况 (基于测验错误率)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                掌握良好 (错误率 &lt; 15%)
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                  <span className="text-gray-700">强化学习 vs 监督学习 (教练开车的比喻)</span>
                  <Badge className="bg-green-100 text-green-800">8% 错误率</Badge>
                </li>
                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                  <span className="text-gray-700">智能体 (Agent) 和 环境 (Environment) 的定义</span>
                  <Badge className="bg-green-100 text-green-800">12% 错误率</Badge>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                普遍难点 (高错误率知识点)
              </h4>
              <ul className="space-y-4">
                <li className="p-4 rounded-md bg-white border border-red-200">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 text-white mt-1">1</Badge>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-red-800">[贝尔曼方程 (Bellman Equation)]</h5>
                        <Badge variant="outline" className="text-red-700 border-red-300">55% 错误率</Badge>
                      </div>
                      <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                        <p className="text-sm text-red-700">
                          <strong>分析：</strong> 多数学生混淆了当前奖励和未来折扣价值的关系，无法正确计算损失函数中的目标值。
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="p-4 rounded-md bg-white border border-red-200">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 text-white mt-1">2</Badge>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-red-800">[状态表示 (State Representation)]</h5>
                        <Badge variant="outline" className="text-red-700 border-red-300">42% 错误率</Badge>
                      </div>
                      <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                        <p className="text-sm text-red-700">
                          <strong>分析：</strong> 在贪吃蛇案例中，学生不理解为什么状态表示 (11 个数值) 中，食物位置和蛇头朝向要分开表示。
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 3. Students Need Attention */}
        <Card className="mb-8 border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700 text-xl">
              <UserCheck className="w-6 h-6" />
              3. 需要关注的学生
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                以下 6 名学生在该章节测验中得分低于 60 分，且阅读进度缓慢：
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['学生 A', '学生 B', '学生 C', '学生 D', '学生 E', '学生 F'].map((student, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border text-center">
                    <User className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-800">{student}</p>
                    <div className="flex justify-center gap-2 mt-2">
                      <Badge variant="outline" className="text-orange-700 border-orange-300 text-xs">
                        {45 + Math.floor(Math.random() * 15)}分
                      </Badge>
                      <Badge variant="outline" className="text-red-700 border-red-300 text-xs">
                        {30 + Math.floor(Math.random() * 20)}%进度
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
          </CardContent>
        </Card>

        {/* Teaching Suggestions */}
        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700 text-xl">
              <Zap className="w-6 h-6" />
              教学建议
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-3">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                <Badge className="bg-blue-600 text-white mt-1">1</Badge>
                <p className="text-gray-700">
                  建议在下次课上，重点讲解贝尔曼方程的递归思想，特别是目标值的计算过程。
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                <Badge className="bg-blue-600 text-white mt-1">2</Badge>
                <p className="text-gray-700">
                  可以考虑出一个练习题，让学生自己设计贪吃蛇的状态表示，并讨论不同方案的优劣。
                </p>
              </div>
          </CardContent>
        </Card>

        {/* Interactive Functions */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              智能交互功能
            </CardTitle>
            <CardDescription className="text-emerald-100">
              一键操作，精准支持教学
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 h-16">
                <div className="text-center">
                  <Send className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">向需要关注的学生推送贝尔曼方程的强化练习包</span>
                </div>
              </Button>

              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 h-16">
                <div className="text-center">
                  <Eye className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">查看贝尔曼方程相关题目错误详情</span>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500">
          <p className="text-sm">© 2024 班级学习分析系统 - AI智能教学管理助手</p>
        </div>
      </div>
    </div>
  );
};

export default ClassAnalysis;
