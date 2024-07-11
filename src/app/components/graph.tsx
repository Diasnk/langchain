"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
  { date: "2022-11-01", desktop: 152700000, mobile: 0 },
  { date: "2022-05-02", desktop: 266000000, mobile: 113300000 },
  { date: "2023-01-17", desktop: 616000000, mobile: 350000000 },
  { date: "2023-02-18", desktop: 1000000000, mobile: 384000000 },
  { date: "2023-03-19", desktop: 1600000000, mobile: 600000000 },
  { date: "2023-04-20", desktop: 1800000000, mobile: 200000000 },
  { date: "2023-05-21", desktop: 1800000000, mobile: 0 },
  { date: "2023-06-22", desktop: 1600000000, mobile: -200000000 },
  { date: "2023-07-23", desktop: 1500000000, mobile: -100000000 },
  { date: "2023-08-24", desktop: 1400000000, mobile: -100000000 },
  { date: "2023-09-25", desktop: 1500000000, mobile: 100000000 },
  { date: "2023-10-26", desktop: 1700000000, mobile: 200000000 },
  { date: "2023-11-27", desktop: 1700000000, mobile: 0 },
  { date: "2023-12-28", desktop: 1600000000, mobile: -100000000 },
  { date: "2024-01-29", desktop: 1600000000, mobile: 0 },
  { date: "2024-02-30", desktop: 1600000000, mobile: 0 },
  { date: "2024-03-01", desktop: 1800000000, mobile: 200000000 },
  { date: "2024-04-01", desktop: 1800000000, mobile: 0 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Total Number Of Visits Per Month",
    color: "hsl(var(--chart-2))",
  },
  mobile: {
    label: "Total Change Of Visits",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Graph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card className="bg-[#96a7bb]">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>ChatGPT's monthly visits</CardTitle>
          <CardDescription>
            Trend
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
