"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, PlayCircle, AlertTriangle, CheckCircle, XCircle, Circle, Target, Lightbulb, BarChart, Brain, Search } from 'lucide-react';
import Navigation from './navigation';

// --- Mock Data based on the provided document ---

const studentData = {
    name: "张三",
    analysisDate: "2025年9月19日",
    overview: {
        progress: 45,
        mastery: 67,
        weeklyStudyTime: 3.5,
        rankPercent: 65,
    },
    knowledgeMap: [
        {
            part: "第一部分：AI基础认知",
            chapters: [
                {
                    name: "第1章：AI智能源于数据",
                    status: "✅",
                    kps: [
                        { name: "KP 1.1: AI智能的直观体验 (旅游攻略、PPT制作)", status: "✅" },
                        { name: "KP 1.2: 人类与AI的规律发现机制对比", status: "✅" },
                        { name: "KP 1.3: 数据、算法、算力的三大支柱作用", status: "✅" },
                    ],
                },
                {
                    name: "第2章：什么是数据",
                    status: "⚪",
                    kps: [
                        { name: "KP 2.1: 数据的定义与形态 (沃尔玛案例)", status: "⚪" },
                        { name: "KP 2.2: 高质量数据的五大条件", status: "⚪" },
                        { name: "KP 2.3: 数据获取的六大途径", status: "⚪" },
                    ],
                },
                {
                    name: "第3章：AI如何看待数据",
                    status: "⚠️",
                    kps: [
                        { name: "KP 3.1: 数据的向量化表示与高维空间", status: "⚠️" },
                        { name: "KP 3.2: 基于向量距离的语义理解", status: "❌" },
                        { name: "KP 3.3: 词嵌入技术 (Word Embeddings)", status: "⚪" },
                    ],
                },
            ],
        },
        {
            part: "第二部分：机器学习核心原理",
            chapters: [
                {
                    name: "第6章：机器学习导论",
                    status: "✅",
                    kps: [
                        { name: "KP 6.1: 机器学习与传统编程的区别", status: "✅" },
                        { name: "KP 6.2: 监督学习、无监督学习、强化学习的分类", status: "✅" },
                    ],
                },
                {
                    name: "第7章：无监督学习",
                    status: "⚠️",
                    kps: [
                        { name: "KP 7.1: 聚类分析的基本思想", status: "⚠️" },
                        { name: "KP 7.2: K-means算法工作原理", status: "❌" },
                        { name: "KP 7.3: 降维技术与关联规则", status: "⚪" },
                    ],
                },
                {
                    name: "第8章：强化学习",
                    status: "⚪",
                    kps: [
                        { name: "KP 8.1: 强化学习四要素 (智能体、环境、奖励、策略)", status: "⚪" },
                        { name: "KP 8.2: 贝尔曼方程与价值预测", status: "⚪" },
                    ],
                },
                {
                    name: "第10章：深度神经网络",
                    status: "⚪",
                    kps: [
                        { name: "KP 10.1: 神经网络的核心优势", status: "⚪" },
                        { name: "KP 10.2: 神经网络的结构与优化", status: "⚪" },
                    ],
                },
            ],
        },
    ],
    recommendations: {
        diagnosis: "我们发现您在 `[KP 7.2: K-means算法]` 和 `[KP 3.2: 基于向量距离的语义理解]` 两个知识点上存在困难。**核心问题**可能在于您对“**AI如何通过计算向量距离来理解数据相似性**”这一基础原理掌握不牢。K-means算法的本质就是将数据点分配给距离最近的聚类中心。因此，我们强烈建议您：\n**请先集中精力攻克 `[KP 3.2: 基于向量距离的语义理解]`**。",
        reviewItems: [
            "KP 7.1: 聚类分析的基本思想",
            "KP 3.1: 数据的向量化表示与高维空间",
        ],
        learningPath: [
            {
                step: "第一步 (巩固基础)",
                focus: "[KP 3.2: 基于向量距离的语义理解]",
                resources: [
                    { type: "视频", title: "《AI的数学语言：向量空间与距离的奥秘》 (12分钟)", icon: PlayCircle },
                    { type: "文档", title: "教材《AI如何看待数据》第2节", icon: BookOpen },
                    { type: "测试", title: "“向量距离与相似度”专项练习题 (共5题)", icon: FileText },
                ],
            },
            {
                step: "第二步 (扫清障碍)",
                focus: "在掌握了向量距离后，请复习 `[KP 7.1: 聚类分析的基本思想]`，并重新学习 `[KP 7.2: K-means算法工作原理]`。",
                resources: [],
            },
            {
                step: "第三步 (继续前行)",
                focus: "完成以上复习后，建议您开始学习 `[第2章：什么是数据]`，为后续的AI学习打下更坚实的数据基础。",
                resources: [],
            },
        ],
    },
    insights: [
        { title: "学习专注度分析", content: "您本周的学习主要集中在“机器学习核心原理”部分，这是一个很好的现象，表明您正在进行系统性学习。", icon: Target },
        { title: "问答系统行为", content: "您在问答系统中提问了“为什么K-means需要计算距离？”，这与您的薄弱知识点 `[KP 3.2]` 高度相关，说明您已经意识到了问题的关键。请继续保持这种探究精神！", icon: Search },
        { title: "学习效率建议", content: "分析显示，您在观看 `[KP 7.2]` 的视频时，暂停和回看的次数较多。这通常意味着您遇到了理解难点。下次遇到类似情况时，建议先暂停学习，回顾相关的先修知识点，这样效率会更高。", icon: Brain },
    ]
};

// --- Helper Components ---

const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
        case '✅': return <CheckCircle className="w-5 h-5 text-green-500" />;
        case '⚠️': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
        case '❌': return <XCircle className="w-5 h-5 text-red-500" />;
        case '⚪': return <Circle className="w-5 h-5 text-gray-300" />;
        default: return null;
    }
};

const KPItem = ({ name, status }: { name: string, status: string }) => (
    <li className="flex items-center gap-3 py-1.5">
        <StatusIcon status={status} />
        <span className="text-gray-700">{name}</span>
    </li>
);

const ChapterItem = ({ name, status, kps }: { name: string, status: string, kps: any[] }) => (
    <li className="ml-4">
        <div className="flex items-center gap-3 py-2">
            <StatusIcon status={status} />
            <h4 className="font-semibold text-gray-800">{name}</h4>
        </div>
        <ul className="pl-8 border-l-2 border-gray-200 ml-2">
            {kps.map(kp => <KPItem key={kp.name} {...kp} />)}
        </ul>
    </li>
);

// --- Main Component ---

const LearningPlan = () => {
    const { name, analysisDate, overview, knowledgeMap, recommendations, insights } = studentData;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <Navigation />

                <header className="text-center my-8">
                    <h1 className="text-4xl font-bold text-gray-800">《人工智能通识》课程学习状况分析报告</h1>
                    <p className="text-lg text-gray-500 mt-2">
                        <strong>学生：</strong>{name} | <strong>分析日期：</strong>{analysisDate}
                    </p>
                </header>

                {/* Module 1: Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><BarChart />学习总览</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-medium text-gray-600">课程总进度</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-blue-600">{overview.progress}%</p>
                                <p className="text-sm text-gray-500 mt-1">已学习 9 / 20 个知识点</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-medium text-gray-600">知识掌握率</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-green-600">{overview.mastery}%</p>
                                <p className="text-sm text-gray-500 mt-1">已掌握 6 / 9 个已学知识点</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg font-medium text-gray-600">本周学习时长</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-purple-600">{overview.weeklyStudyTime}小时</p>
                                <p className="text-sm text-gray-500 mt-1">超过了 {overview.rankPercent}% 的同学</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Module 2: Knowledge Map */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><BookOpen />我的知识地图</h2>
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm">
                                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />已掌握</div>
                                <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500" />薄弱</div>
                                <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" />未掌握</div>
                                <div className="flex items-center gap-2"><Circle className="w-4 h-4 text-gray-300" />未开始</div>
                            </div>
                            <hr className="mb-4" />
                            {knowledgeMap.map(part => (
                                <div key={part.part} className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{part.part}</h3>
                                    <ul>
                                        {part.chapters.map(chapter => <ChapterItem key={chapter.name} {...chapter} />)}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>

                {/* Module 3: Recommendations */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><Lightbulb />行动建议与智能推荐</h2>
                    <div className="space-y-6">
                        <Card className="border-l-4 border-red-500">
                            <CardHeader>
                                <CardTitle className="text-red-700">根源诊断与首要任务</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="whitespace-pre-line text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: recommendations.diagnosis.replace(/`\[(.*?)\]`/g, '<code class="bg-red-100 text-red-800 font-semibold px-1.5 py-0.5 rounded">$1</code>') }} />
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-yellow-500" />立即复习 (薄弱知识点)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {recommendations.reviewItems.map(item => (
                                            <li key={item} className="flex items-center gap-3 p-2 bg-yellow-50 rounded-md">
                                                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                                <span className="text-yellow-800 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><Target className="text-blue-500" />推荐学习路径与资源</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {recommendations.learningPath.map(path => (
                                            <li key={path.step}>
                                                <h4 className="font-semibold text-blue-800">{path.step}</h4>
                                                <p className="text-sm text-gray-600 pl-4 border-l-2 border-blue-200 ml-2 py-1 my-1" dangerouslySetInnerHTML={{ __html: path.focus.replace(/`\[(.*?)\]`/g, '<code class="bg-blue-100 text-blue-800 font-semibold px-1 py-0.5 rounded">$1</code>') }} />
                                                <div className="mt-2 space-y-2">
                                                    {path.resources.map(res => (
                                                        <Button key={res.title} variant="outline" className="w-full justify-start gap-3">
                                                            <res.icon className="w-4 h-4 text-gray-500" />
                                                            {res.title}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Module 4: Learning Insights */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><Brain />学习行为洞察</h2>
                    <div className="space-y-4">
                        {insights.map(insight => (
                            <Card key={insight.title}>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-lg">
                                        <insight.icon className="w-5 h-5 text-indigo-500" />
                                        {insight.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">{insight.content}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <footer className="text-center mt-12 text-gray-500 text-sm">
                    <p>© 2025 AI学习规划系统</p>
                </footer>
            </div>
        </div>
    );
};

export default LearningPlan;