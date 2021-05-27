---
sidebar_position: 7
---

# 6、通过Archive生成IPA

如何基于 `AdHoc` 打包的文件，自动生成 `AppStore` 的 `ipa`呢？前段时间抽空研究了下,已经跑通验证过。总体步骤如下。

## 1. gym

在打包时，指定 archive_path , 保存 archive。(默认的 archive 路径比较复杂)

```
gym(
    ...
    archive_path:"./MyAppV1.0.xcarchive")
```

## 2. exportOptionsPlist

在转换时需要该文件，该文件的内容其实就是相当于手动导出时选的那些参数、配置。

获取方法其实就是通过 Xcode 手动转换导出一次，然后从导出的文件夹下找到 ExportOptions.plist。

如果不是很懂的话，可以参考这篇文章 [iOS 生成 exportOptionsPlist 文件](https://blog.csdn.net/lovechris00/article/details/79141752)

## 3.xcodebuild(命令行)

下边就是整个导出IPA的指令，主要修改的参数有三个:

- archivePath: 步骤1中设置的路径
- exportOptionsPlist: 步骤2中导出的配置文件。建议放在同一个目录下
- exportPath: 导出IPA的路径

```
xcodebuild -exportArchive -archivePath ./MyAppV1.0.xcarchive -exportOptionsPlist ./ExportOptions.plist -exportPath ~/Download/MyAppV1.0.ipa
```

但是，这样的话还是手动操作的，如果要自动化上传过程，还是要集成到 `Fastlane` 命令中的。

## 4. Fastlane

> 如果不会编写打包的脚本，建议参考 [2、自动化打包(下)](./fastlane-gym-02.md)

在打商店/正式包的脚本中，参考下面修改原有的 `gym` 指令:

- archive_path 指定archive文件路径
- skip_build_archive 指定不编译模式，直接使用之前的archive文件

```
gym(
    ...
    # 跳过编译代码，直接使用archive_path
    # https://docs.fastlane.tools/actions/gym/
    archive_path: outXcarchivepath,
    skip_build_archive: true
)
```
