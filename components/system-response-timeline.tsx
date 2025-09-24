"use client";

import React from "react";
import Navigation from "./navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle2, Clock, Route } from "lucide-react";

interface TimelineEntry {
    prefix: string;
    text: string;
    status: "progress" | "done" | "pending";
}

interface TimelineStep {
    title: string;
    subtitle: string;
    status: "progress" | "done" | "pending";
    entries: TimelineEntry[];
}

const statusStyles: Record<"progress" | "done" | "pending", { icon: React.ElementType; className: string; badge: string }> = {
    progress: { icon: Loader2, className: "text-cyan-200", badge: "进行中" },
    done: { icon: CheckCircle2, className: "text-emerald-200", badge: "已完成" },
    pending: { icon: Clock, className: "text-slate-500", badge: "待开始" }
};

const timelineSteps: TimelineStep[] = [
    {
        title: "解析用户意图与目标",
        subtitle: "理解学习主题与目标任务",
        status: "done",
        entries: [
            { prefix: "...", text: "正在分析用户请求...", status: "progress" },
            {
                prefix: "✔",
                text: "AI工具入口应答：好的，我将为您制定一份个性化的‘深度学习’学习规划。请稍候，我需要先分析一下您的学习情况。",
                status: "done"
            },
            { prefix: "✔", text: "识别意图：[生成学习规划]", status: "done" },
            { prefix: "✔", text: "提取关键实体：[学习主题: \"深度学习\"]", status: "done" }
        ]
    },
    {
        title: "确定学习范围",
        subtitle: "调用知识图谱锁定全部模块",
        status: "done",
        entries: [
            { prefix: "...", text: "正在调用 [知识图谱]...", status: "progress" },
            {
                prefix: "✔",
                text: "执行图谱查询：(查询 \"深度学习\" 主题节点及所有子知识点、前置依赖)",
                status: "done"
            },
            {
                prefix: "✔",
                text: "知识图谱返回：8 大模块、45 个关键知识点（含神经网络基础、CNN、RNN、Transformer 等）",
                status: "done"
            }
        ]
    },
    {
        title: "评估用户当前状态",
        subtitle: "整合学习记录、测试与问答",
        status: "done",
        entries: [
            { prefix: "...", text: "正在调用 [用户学习记录]...", status: "progress" },
            { prefix: "✔", text: "已获取学习活动：神经网络基础 3.5 小时 · CNN 模块 15 分钟前访问", status: "done" },
            { prefix: "...", text: "正在核对 [测试与资源使用]...", status: "progress" },
            { prefix: "✔", text: "测试成绩：神经网络基础测验 85/100", status: "done" },
            { prefix: "✔", text: "资源进度：CNN 入门视频观看 20%", status: "done" },
            { prefix: "✔", text: "问答记录：反向传播、卷积核工作方式问题已归档", status: "done" }
        ]
    },
    {
        title: "诊断知识掌握情况",
        subtitle: "产出 Gap Analysis",
        status: "done",
        entries: [
            { prefix: "...", text: "正在对比目标范围与当前掌握度...", status: "progress" },
            { prefix: "✔", text: "已掌握：神经网络基础、线性回归（可快速复习）", status: "done" },
            { prefix: "✔", text: "薄弱：反向传播、CNN 基础（需重点巩固）", status: "done" },
            { prefix: "✔", text: "待规划：RNN、LSTM、注意力机制、Transformer 等", status: "done" }
        ]
    },
    {
        title: "规划学习路径与资源",
        subtitle: "依赖排序 + 资源编排",
        status: "done",
        entries: [
            { prefix: "...", text: "正在排序学习路径...", status: "progress" },
            { prefix: "✔", text: "学习顺序：反向传播 → CNN → RNN → LSTM → Transformer → 应用拓展", status: "done" },
            { prefix: "✔", text: "资源匹配完成：视频、文档、练习、组卷试卷已对齐", status: "done" }
        ]
    },
    {
        title: "生成并交付学习规划",
        subtitle: "输出 3 天强化学习路线",
        status: "done",
        entries: [
            { prefix: "✔", text: "已生成个性化学习计划：特征工程 vs 深度学习双路径融合", status: "done" },
            { prefix: "✔", text: "包含诊断总结、日程安排、资源清单与评测节点", status: "done" },
            { prefix: "✔", text: "准备交付：请根据下方计划执行", status: "done" }
        ]
    }
];

const SystemResponseTimeline: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto w-full max-w-5xl px-6 py-10">
                <Navigation />
                <Card className="mt-6 border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/40">
                    <CardHeader className="border-b border-slate-800 pb-6">
                        <CardTitle className="flex items-center gap-2 text-lg text-white">
                            <Route className="h-5 w-5 text-cyan-300" />
                            系统响应时间线
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            模仿 Manus 的处理顺序，展示从意图解析到规划交付的完整步骤。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="relative pl-6">
                            <div className="absolute left-[11px] top-2 bottom-0 w-px bg-slate-800" />
                            <div className="space-y-8">
                                {timelineSteps.map((step, idx) => {
                                    const StatusIcon = statusStyles[step.status].icon;
                                    return (
                                        <div key={idx} className="relative">
                                            <div
                                                className={cn(
                                                    "absolute left-[-11px] top-2 grid h-6 w-6 place-items-center rounded-full border",
                                                    step.status === "done"
                                                        ? "border-emerald-400/60 bg-emerald-500/20"
                                                        : step.status === "progress"
                                                            ? "border-cyan-400/60 bg-cyan-500/15"
                                                            : "border-slate-600/50 bg-slate-800/60"
                                                )}
                                            >
                                                <StatusIcon
                                                    className={cn(
                                                        "h-4 w-4",
                                                        statusStyles[step.status].className,
                                                        step.status === "progress" && "animate-spin"
                                                    )}
                                                />
                                            </div>
                                            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 shadow-inner shadow-slate-900/40">
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <div>
                                                        <h3 className="text-base font-medium text-white">{step.title}</h3>
                                                        <p className="text-xs text-slate-400">{step.subtitle}</p>
                                                    </div>
                                                    <Badge variant="outline" className="border-emerald-400/50 bg-emerald-500/10 text-emerald-200">
                                                        {statusStyles[step.status].badge}
                                                    </Badge>
                                                </div>
                                                <div className="mt-4 space-y-2 text-sm text-slate-200">
                                                    {step.entries.map((entry, entryIdx) => {
                                                        const EntryIcon = statusStyles[entry.status].icon;
                                                        return (
                                                            <div
                                                                key={entryIdx}
                                                                className="flex items-start gap-3 rounded-lg border border-transparent bg-slate-900/50 px-3 py-2"
                                                            >
                                                                <span className="font-mono text-xs text-slate-500">{entry.prefix}</span>
                                                                <div className="mt-0.5 flex items-start gap-2">
                                                                    <EntryIcon
                                                                        className={cn(
                                                                            "mt-0.5 h-4 w-4",
                                                                            statusStyles[entry.status].className,
                                                                            entry.status === "progress" && "animate-spin"
                                                                        )}
                                                                    />
                                                                    <span>{entry.text}</span>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SystemResponseTimeline;
