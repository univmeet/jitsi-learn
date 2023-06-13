# 工具

## PeriodicRunnable

应该在指定执行器服务上定期执行的可运行程序的基类。

```
+ org.ice4j.util.PeriodicRunnable.java

public void schedule()
public void cancel()
```

## Ice4jLogFormatter

以人类可读的形式打印LogRecord的简明摘要。摘要通常只占一行（除非太长），这里没有添加任何换行符。

```
+ org.ice4j.util.Ice4jLogFormatter.java

public synchronized String format(LogRecord record)
```
