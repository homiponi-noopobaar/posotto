import sys
import io
import MeCab

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def mecab_analysis(text):
    # MeCabのインスタンスを作成
    tagger = MeCab.Tagger()

    # 形態素解析の実行
    parse = tagger.parse(text)

    # 結果の出力
    print(parse)

# 解析したいテキスト
sample_text = "今日は良い天気だね。"

# 形態素解析の実行
mecab_analysis(sample_text)
