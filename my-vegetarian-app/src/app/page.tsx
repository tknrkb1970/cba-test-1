import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, TextField, Box, Link as MuiLink } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NextLink from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NextLink href="/" passHref legacyBehavior>
              <MuiLink sx={{ color: 'inherit', textDecoration: 'none' }}>
                ベジタリアン向け宿泊先・グルメ情報サイト
              </MuiLink>
            </NextLink>
          </Typography>
          <Box>
            <NextLink href="/search" passHref legacyBehavior>
              <Button color="inherit">検索</Button>
            </NextLink>
            <NextLink href="/login" passHref legacyBehavior>
              <Button color="inherit">ログイン</Button>
            </NextLink>
            <NextLink href="/register" passHref legacyBehavior>
              <Button color="inherit">会員登録</Button>
            </NextLink>
            <NextLink href="/store-admin" passHref legacyBehavior>
              <Button color="inherit">店舗様向け</Button>
            </NextLink>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="py-8">
        {/* Hero Section / Main Visual (Optional) */}
        <Box className="text-center py-16 bg-gray-100 rounded-lg mb-8">
          <Typography variant="h3" component="h1" gutterBottom>
            最高のベジタリアン体験を見つけよう
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            あなたにぴったりのレストランや宿泊施設を簡単に検索・予約できます。
          </Typography>
          <NextLink href="/search" passHref legacyBehavior>
            <Button variant="contained" size="large" startIcon={<SearchIcon />}>
              今すぐ検索
            </Button>
          </NextLink>
        </Box>

        {/* Keyword Search Form */}
        <Box className="mb-8 p-6 rounded-lg shadow-md bg-white">
          <Typography variant="h5" component="h2" gutterBottom>
            キーワードで探す
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={9}>
              <TextField fullWidth label="例: ヴィーガンラーメン、駅近、個室" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button fullWidth variant="contained" size="large" startIcon={<SearchIcon />}>
                検索
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Area/Genre Search Links */}
        <Box className="mb-8">
          <Typography variant="h5" component="h2" gutterBottom>
            エリア・ジャンルから探す
          </Typography>
          <Grid container spacing={2}>
            {/* Example Areas */}
            {['東京', '大阪', '京都', '北海道', '沖縄', '福岡'].map((area) => (
              <Grid item xs={6} sm={4} md={2} key={area}>
                <NextLink href={`/search?area=${area}`} passHref legacyBehavior>
                  <MuiLink display="block" className="p-4 border rounded-lg text-center hover:bg-gray-50">
                    {area}
                  </MuiLink>
                </NextLink>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} className="mt-4">
            {/* Example Genres */}
            {['カフェ', 'レストラン', '居酒屋', 'ホテル', '旅館', 'B&B'].map((genre) => (
              <Grid item xs={6} sm={4} md={2} key={genre}>
                <NextLink href={`/search?genre=${genre}`} passHref legacyBehavior>
                  <MuiLink display="block" className="p-4 border rounded-lg text-center hover:bg-gray-50">
                    {genre}
                  </MuiLink>
                </NextLink>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Recommended Stores/Hotels */}
        <Box className="mb-8">
          <Typography variant="h5" component="h2" gutterBottom>
            おすすめ店舗・宿泊施設
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Card>
                  <Box sx={{ height: 180, backgroundColor: 'grey.300' }} /> {/* Placeholder for image */}
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      店舗・施設名 {item}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      簡単な説明文。この施設は素晴らしい特徴を持っています...
                    </Typography>
                    <NextLink href={`/facility/${item}`} passHref legacyBehavior>
                       <Button size="small" className="mt-2">詳しく見る</Button>
                    </NextLink>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Popular Rankings */}
        <Box className="mb-8">
          <Typography variant="h5" component="h2" gutterBottom>
            人気ランキング
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <Card>
                  <Box sx={{ height: 140, backgroundColor: 'grey.200' }} /> {/* Placeholder for image */}
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      ランキング {item}位
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      店舗・施設名
                    </Typography>
                    <NextLink href={`/facility/rank-${item}`} passHref legacyBehavior>
                       <Button size="small" className="mt-1">詳しく見る</Button>
                    </NextLink>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* News/Announcements */}
        <Box className="mb-8">
          <Typography variant="h5" component="h2" gutterBottom>
            新着情報・お知らせ
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3].map((news) => (
              <Grid item xs={12} md={4} key={news}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" color="text.secondary">2024/07/30</Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      お知らせタイトル {news}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="mb-2">
                      お知らせの短い概要がここに入ります...
                    </Typography>
                    <NextLink href={`/news/${news}`} passHref legacyBehavior>
                      <Button size="small">続きを読む</Button>
                    </NextLink>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box className="text-center mt-4">
            <NextLink href="/news" passHref legacyBehavior>
              <Button variant="outlined">お知らせ一覧へ</Button>
            </NextLink>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'grey.200', p: 6 }} className="mt-auto">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                サイト名
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ベジタリアンフレンドリーな旅をサポートします。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                サイト情報
              </Typography>
              <NextLink href="/about" passHref legacyBehavior><MuiLink display="block" variant="body2" color="text.secondary" sx={{mb:1}}>このサイトについて</MuiLink></NextLink>
              <NextLink href="/terms" passHref legacyBehavior><MuiLink display="block" variant="body2" color="text.secondary" sx={{mb:1}}>利用規約</MuiLink></NextLink>
              <NextLink href="/privacy" passHref legacyBehavior><MuiLink display="block" variant="body2" color="text.secondary" sx={{mb:1}}>プライバシーポリシー</MuiLink></NextLink>
              <NextLink href="/contact" passHref legacyBehavior><MuiLink display="block" variant="body2" color="text.secondary" sx={{mb:1}}>お問い合わせ</MuiLink></NextLink>
              <NextLink href="/faq" passHref legacyBehavior><MuiLink display="block" variant="body2" color="text.secondary">よくある質問</MuiLink></NextLink>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                店舗様へ
              </Typography>
              <NextLink href="/register/store" passHref legacyBehavior><MuiLink display="block" variant="body2" color="text.secondary" sx={{mb:1}}>店舗登録はこちら</MuiLink></NextLink>
              <NextLink href="/store-admin/login" passHref legacyBehavior><MuiLink display="block" variant="body2" color="text.secondary">店舗ログイン</MuiLink></NextLink> {/* Assuming a separate login for store owners */}
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
            {'© '}
            <MuiLink color="inherit" href="/">
              ベジタリアン向け宿泊先・グルメ情報サイト
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
